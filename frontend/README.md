# Frontend

This is the React frontend  for the Eighty20 Technical Challenge.

# Setup

> I am making several assumptions on the reviewer. I assume that the reviewer is familiar with Linux, MacOS, JavaScript, React + Vite  and etc. If anything does go wrong during the setup process, I simply could not account for the unknowns on the reviewers side.

## Install dependencies

In order for the reviewer to the run this project successfully on their local machine they would need:

1. A Linux or MacOS machine
2. Knowledge of shell commands via zsh and bash
3. Install [nvm](https://github.com/nvm-sh/nvm)

I have written a shell command to assist with the setup process. You can `source dev.sh` and run `setup_environment` and in theory it should handle all the installation steps for you. It works on my environment but it is most likely the case that you might experience issues with the `setup_environment` command. This is why I provided the dependencies directly so you could troubleshoot or even use your alternatives.

The reality is that you are probably going to have to run the `setup_environment` command a few times as there are certain things that I could not account for right now.

## Running the application

After you have followed the installation of the dependencies step. The next step is to get React frontend running to talk to the backend.

1. Run `source dev.sh`
2. Run `run_vite_server` follow the prompts
4. Go to http://127.0.0.1:5173/ and you will be redirected to the login page
5. Login then you will be redirected to the home page
6. You can refresh the page and you will remain logged in unless you log out
7. You can try and break the application but it should pass the acceptance criteria

If all goes well, you should have successfully setup the React frontend for use by the backend
