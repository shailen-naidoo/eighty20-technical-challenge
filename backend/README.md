# Backend

This is the Django backend for the Eighty20 Technical Challenge.

# Setup

> I am making several assumptions on the reviewer. I assume that the reviewer is familiar with Linux, MacOS, Python, Django and etc. If anything does go wrong during the setup process, I simply could not account for the unknowns on the reviewers side.

## Install dependencies

In order for the reviewer to the run this project successfully on their local machine they would need:

1. A Linux or MacOS machine
2. Knowledge of shell commands via zsh and bash
3. Install [pyenv](https://github.com/pyenv/pyenv)
4. Install [pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv)
5. Install [poetry](https://python-poetry.org/) package manager
6. Install application dependencies

I have written a shell command to assist with the setup process. You can `source dev.sh` and run `setup_environment` and in theory it should handle all the installation steps for you. It works on my environment but it is most likely the case that you might experience issues with the `setup_environment` command. This is why I provided the dependencies directly so you could troubleshoot or even use your alternatives.

The reality is that you are probably going to have to run the `setup_environment` command a few times as there are certain things that I could not account for right now.

## Running the application

After you have followed the installation of the dependencies step. The next step is to get Django running to serve the APIs to the frontend.

1. Run `source dev.sh`
2. Run `create_django_superuser` follow the prompts
3. Run `run_django_server`
4. Go to http://127.0.0.1:8000/admin and login with your user
5. Once on the Django admin portal, click on the "Users" page
6. Navigate to your user and scroll to the bottom
7. Add your favorite pokemon
8. Then save your information

If all goes well, you should have successfully setup the Django backend for use by the frontend.

## Postman

I have also committed the Postman collection so you can test the APIs for the backend using the Postman environment. `Eighty20.postman_collection.json`