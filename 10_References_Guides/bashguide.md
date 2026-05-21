# Quantics Hartree v1 Scripts

This note explains the three educational `v1` scripts in this folder:

- `submit_quantics_v1`
- `run_quantics_v1`
- `quantics_env_v1.sh`

It also explains the main bash syntax used in those scripts.

## 1. What these scripts now do

The design is intentionally split into two separate layers:

### Interactive shell layer

This is handled by:

- `quantics_env_v1.sh`

Its purpose is:

- choose which Quantics tree your current shell uses
- update `PATH`
- update `LD_LIBRARY_PATH`
- make interactive commands like `compile`, `quantics`, `minstall`, `menv` work in your terminal

It does **not** decide what a Slurm batch job uses.

### Batch/Slurm layer

This is handled by:

- `submit_quantics_v1`
- `run_quantics_v1`

Their purpose is:

- decide what to submit to Slurm
- decide what Quantics tree the batch job should run
- set the runtime libraries needed on the compute node
- launch the correct Quantics executable

This means the shell environment and the batch environment stay separate on purpose.

## 2. New local-tree batch support

The new feature is:

```bash
submit_quantics_v1 -d /absolute/path/to/quantics JOB
```

This means:

- do **not** use the shared `2.2` tree
- do **not** use the shared `2.2-dev` tree
- instead use exactly the tree at the path given after `-d`

Example:

```bash
submit_quantics_v1 -d /home/zccakma/quantics_custom myjob
```

The path must:

- be absolute
- exist on the cluster
- contain `install/QUANTICS_client`

You must not combine `-d` with `-v`.

Bad:

```bash
submit_quantics_v1 -d /home/zccakma/quantics_custom -v dev myjob
```

Good:

```bash
submit_quantics_v1 -d /home/zccakma/quantics_custom myjob
```

or

```bash
submit_quantics_v1 -v dev myjob
```

## 3. How the three scripts relate now

### `quantics_env_v1.sh`

This script is for your shell only.

Examples:

```bash
. /home/software/bin/quantics_env_v1.sh stable
. /home/software/bin/quantics_env_v1.sh dev
. /home/software/bin/quantics_env_v1.sh /home/zccakma/quantics_custom
```

That changes your current shell.

After sourcing, these helper functions are available:

```bash
q22
q22dev
qlocal /home/zccakma/quantics_custom
qlocal quantics_custom
```

Important detail:

- `quantics_use` expects `stable`, `dev`, or an absolute path
- `qlocal` is a convenience wrapper for local trees
- `qlocal` accepts either an absolute path or a relative path
- if you give a relative path, it is resolved relative to your current directory

### `submit_quantics_v1`

This script:

- reads user options like `-n`, `-b`, `-v`, `-d`
- validates them
- writes a Slurm `.cmd` file
- calls `run_quantics_v1` from inside that Slurm job

### `run_quantics_v1`

This script:

- receives the already-resolved target from `submit_quantics_v1`
- turns that target into a real `QUANTICS_DIR`
- decides which executable to run
- rebuilds `LD_LIBRARY_PATH`
- runs the job in scratch
- copies results back

## 4. Typical usage examples

### Shared stable install

```bash
submit_quantics_v1 myjob
```

Meaning:

- use shared Quantics `2.2`
- use 1 core
- use serial build

### Shared dev install

```bash
submit_quantics_v1 -v dev myjob
```

Meaning:

- use shared Quantics `2.2-dev`

### Shared dev debug build

```bash
submit_quantics_v1 -v dev -b debug myjob
```

Meaning:

- use shared dev tree
- try to run `quanticsD`

### Local Quantics tree

```bash
submit_quantics_v1 -d /home/zccakma/quantics_custom myjob
```

Meaning:

- use the local Quantics install at that exact path

### Local tree with OpenMP

```bash
submit_quantics_v1 -d /home/zccakma/quantics_custom -n 8 -b omp myjob 16
```

Meaning:

- use your local tree
- ask Slurm for 8 CPUs
- run the OpenMP executable
- restrict the job to the 16-core node class

## 5. How to prepare a local Quantics tree on Hartree

This is the usual cluster-side flow.

### Step 1: go to your checkout

```bash
cd ~/quantics_custom
```

Code meaning:

- `cd` means “change directory”
- `~` means “my home directory”

Plain English:

- move your terminal into your own Quantics copy

### Step 2: install the checkout as a Quantics tree

```bash
cd ~/quantics_custom/install
./install_quantics
```

Code meaning:

- `./install_quantics` runs the file named `install_quantics` from the current directory

Plain English:

- create the machine-specific setup files that make this checkout behave like a proper Quantics install on Hartree

### Step 3: activate that local tree in your shell

```bash
source ~/quantics_custom/install/QUANTICS_client
```

Code meaning:

- `source` runs a script in the current shell instead of starting a child shell

Plain English:

- apply the environment changes from `QUANTICS_client` to your current terminal session

Alternative if you want to test the helper script first:

```bash
source /path/to/quantics_env_v1.sh keep
qlocal /home/zccakma/quantics_custom
```

or, if you are already in your home directory and the checkout is directly inside it:

```bash
source /path/to/quantics_env_v1.sh keep
qlocal quantics_custom
```

Plain English:

- load the helper functions into your shell
- ask `qlocal` to switch to your local tree
- if you give `qlocal` a relative path like `quantics_custom`, it turns that into the full path first

### Step 4: check what tree is active

```bash
menv
```

Plain English:

- show the currently active Quantics-related environment

### Step 5: compile

```bash
cd ~/quantics_custom/bin
compile quantics
compile -O quantics
```

Plain English:

- build the serial executable
- build the OpenMP executable

### Step 6: submit using the local tree

```bash
submit_quantics_v1 -d /home/zccakma/quantics_custom myjob
```

Plain English:

- tell the batch job to use your own compiled tree instead of the shared install

## 6. Optional local runtime-library override

`run_quantics_v1` uses this rule for local trees:

1. If `QUANTICS_LOCAL_FORTRAN_RUNTIME_LIBDIR` is set, use that.
2. Otherwise fall back to:

```bash
/opt/compat/quantics-gcc72-runtime
```

Example override:

```bash
export QUANTICS_LOCAL_FORTRAN_RUNTIME_LIBDIR=/opt/gcc/14.1.0/lib64
submit_quantics_v1 -d /home/zccakma/quantics_custom myjob
```

Use this only if your local build really needs a different Fortran runtime.

## 7. Bash syntax used in these scripts

Below are the main shell features used in the scripts, with small examples.

### 7.1 Variable assignment

```bash
JOB="water"
NPROC="8"
```

Meaning:

- store text in a shell variable

Notes:

- no spaces around `=`
- variables are referenced later with `$JOB` or `${JOB}`

### 7.2 Reading a variable

```bash
echo "$JOB"
```

Meaning:

- print the value stored in `JOB`

Why quotes matter:

```bash
echo "$QOPTS"
```

keeps the value together safely if it contains spaces.

### 7.3 Parameter expansion with defaults

```bash
JOB_DIR="${2:-$(pwd)}"
```

Meaning in code language:

- use positional argument 2 if it exists
- otherwise run `pwd` and use that result

Plain English:

- “if the caller gave me a job directory, use it; otherwise use the current directory”

### 7.4 Command substitution

```bash
SCRIPT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
```

Meaning:

- run the command inside `$(...)`
- take its output
- store that output in `SCRIPT_DIR`

Plain English:

- “work out the absolute directory containing this script”

### 7.5 `if` statements

```bash
if [ -z "$JOB" ]; then
  echo "No job name"
  exit 1
fi
```

Meaning:

- if `JOB` is empty, print an error and stop

Common test flags:

- `-z "$x"` means string is empty
- `-n "$x"` means string is not empty
- `-f file` means regular file exists
- `-d dir` means directory exists
- `-r file` means readable
- `-x file` means executable

### 7.6 What `qlocal` is doing

Here is the core shape of the function:

```bash
qlocal() {
  local requested_path
  local resolved_path

  if [ $# -lt 1 ]; then
    echo "Usage: qlocal /path/to/quantics" >&2
    return 1
  fi

  requested_path="$1"

  case "$requested_path" in
    /*)
      resolved_path="$requested_path"
      ;;
    *)
      resolved_path="$(cd "$requested_path" 2>/dev/null && pwd -P)"
      ;;
  esac

  quantics_use "$resolved_path"
}
```

What each part is doing:

- `local requested_path` and `local resolved_path` create temporary variables that only exist inside the function
- `$#` means “how many arguments did the user pass to this function?”
- `[ $# -lt 1 ]` means “did the user pass fewer than one arguments?”
- `return 1` stops the function and reports failure, but does not close your shell
- `requested_path="$1"` stores the first argument
- `case "$requested_path" in` starts pattern matching on that argument
- `/*)` means “this starts with `/`, so it is already an absolute Unix path”
- the `*)` branch is the fallback for anything else, usually a relative path
- `cd "$requested_path"` tries to move into that directory
- `2>/dev/null` hides the error text if that `cd` fails
- `pwd -P` prints the real absolute path of the directory after changing into it
- `$(...)` captures the output of `pwd -P` and stores it in `resolved_path`
- `quantics_use "$resolved_path"` then passes the cleaned-up absolute path to the stricter switching function

Plain-English summary:

- `qlocal` is basically a friendlier front end for local trees
- if you already know the full path, it uses it directly
- if you only type a relative path, it first works out the full path for you
- then it calls `quantics_use`, which does the actual Quantics environment switch

### 7.7 `case`

```bash
case "$BUILD" in
  serial)
    echo "serial build"
    ;;
  omp)
    echo "openmp build"
    ;;
  *)
    echo "something else"
    ;;
esac
```

Meaning:

- match one variable against several possible patterns

Plain English:

- this is a cleaner alternative to long chains of `if ... elif ...`

### 7.8 Functions

```bash
helpf() {
  echo "Help text"
}
```

Meaning:

- define a reusable block of shell commands

Call it like:

```bash
helpf
```

### 7.9 `getopts`

```bash
while getopts ":n:b:" opt; do
  case "$opt" in
    n) NPROC="$OPTARG" ;;
    b) BUILD="$OPTARG" ;;
  esac
done
```

Meaning:

- parse short command-line options such as `-n 8 -b omp`

Important variables:

- `opt` is the option letter being processed
- `OPTARG` is the value for an option that needs one
- `OPTIND` tracks how far parsing got

### 7.10 `shift`

```bash
shift $((OPTIND - 1))
```

Meaning:

- throw away the arguments already handled by `getopts`

Plain English:

- “move past the options so only the positional arguments remain”

### 7.11 `export`

```bash
export QUANTICS_DIR="/home/zccakma/quantics_custom"
```

Meaning:

- make the variable available to child processes

Plain English:

- let programs started from this shell see that variable too

### 7.12 `unset`

```bash
unset LD_LIBRARY_PATH
```

Meaning:

- remove a variable from the environment

Plain English:

- forget any old value so the script can rebuild it cleanly

### 7.13 `&&` and `||`

```bash
command -v scontrol >/dev/null 2>&1 && echo "scontrol exists"
```

Meaning:

- run the right-hand command only if the left-hand command succeeded

Example with `||`:

```bash
mkdir -p "$SCR_BASE" || exit 1
```

Meaning:

- if `mkdir` fails, stop immediately

### 7.14 Exit status and `$?`

```bash
some_command
RUN_STATUS=$?
```

Meaning:

- `$?` is the exit code of the command that just ran

Plain English:

- `0` usually means success
- non-zero usually means some kind of failure

### 7.15 Here-documents

```bash
cat <<EOF > file.txt
hello
world
EOF
```

Meaning:

- write a block of text into a file

In `submit_quantics_v1`, this is how the Slurm `.cmd` file is generated.

### 7.16 Globs and patterns

Inside `case`, patterns like these appear:

```bash
/*)
```

Meaning:

- match any absolute Unix path

Another example:

```bash
node*)
```

Meaning:

- match any string starting with `node`

### 7.17 Quoting

```bash
"$RUN_SCRIPT" "$JOB" "$JOB_DIR" "$RUN_TARGET" "$NPROC" "$BUILD" "$QOPTS"
```

Meaning:

- pass each value as one argument

Plain English:

- the quotes protect spaces and special characters

Without quotes, paths or option strings can be split unexpectedly.

## 8. Reading the scripts in order

If you want to study the scripts, this is the most useful reading order:

1. `quantics_env_v1.sh`
2. `submit_quantics_v1`
3. `run_quantics_v1`

Why this order:

- first learn how the shell setup works
- then learn how the Slurm submit wrapper works
- then learn how the compute-node executor works

## 9. Mental model to keep

The simplest mental model is:

- `quantics_env_v1.sh` changes **your terminal**
- `submit_quantics_v1` writes **a Slurm job script**
- `run_quantics_v1` runs **inside the Slurm job**

That one distinction explains most of the confusion.
