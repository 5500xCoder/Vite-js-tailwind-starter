
import { execSync } from 'child_process';

const runCommand = command=>{
    try{
        execSync(`${command}`,{stdio: 'inherit'});
    }catch(e){
        console.error(`Failed to execute ${command}`,e);
        return false;
    }
    return true;
}


const repoName=process.argv[2];
const gitCheckoutCommand =`git clone --depth 1 https://github.com/5500xCoder/Vite-js-tailwind-starter ${repoName}`;
const installDepsCommand =`cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkOut= runCommand(gitCheckoutCommand);
if(!checkOut) process.exit(-1);
console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(-1);
console.log("Congratulation! You are Ready. Follow the Following commands to start");

console.log(`cd${reponame}&& npm start`);