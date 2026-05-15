import os  
import subprocess
import re # Import the regular expression module

def count_alphanumeric_words_in_repo():
    result = subprocess.run(['git', 'ls-files'], capture_output=True, text=True)
    files = result.stdout.splitlines()

    total_words = 0
    # This regex pattern finds boundaries containing letters/numbers/underscores
    word_pattern = re.compile(r'\b\w+\b') 

    for file in files:
        if not os.path.isfile(file):
            continue
            
        with open(file, 'r', errors='ignore') as f:
            for line in f:
                # Find all matches in the line and count them
                words_in_line = word_pattern.findall(line)
                total_words += len(words_in_line)

    print(f"Total alphanumeric words: {total_words}")

if __name__ == "__main__":
    count_alphanumeric_words_in_repo()