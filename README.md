# Great Cyber Defense Hillcrest Valley School Website

## Taking Care of Dependencies

### 1. Pull all of the files from this github onto local machine
`git clone https://github.com/SorcerersCode/GDDC-School-Website.git`

### 2. Install Node.js so the React framework can do it's thing
1. Install nvm
- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
- `source ~/.bashrc`
2.  Use nvm to install node
    - `nvm install node`
    - `nvm alias default node`

### 3. Install npm
- `sudo apt install npm`

### 4. Verify installations
- Check by running: `which npx`    
- If it's not installed or is old: `npm install -g npx`
- Check by running:
    - `npm --version`
    - `nodejs --version`

### 5. Install serve so the website can be hosted on the machine
- `sudo npm install -g serve`


## Starting Up the Webpage

1. cd into the "GDDC-School-Website" directory
2. run `sudo serve -s build -l 80`

Open [http://localhost:80](http://localhost:80) to view it in your browser.



## Troubleshooting

If there is a service version mismatch error with serve, try running:
`npm install -g serve@latest`