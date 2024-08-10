PROJECT_VIRTUALENV_NAME="eighty20-technical-challenge"

if command -v pyenv > /dev/null 2>&1; then
  pyenv activate $PROJECT_VIRTUALENV_NAME
  echo "Python project version: $(pyenv local)"
fi

function setup_environment() {
  ### SETUP PYENV & VIRTUALENV

  rm -rf "/Users/$(whoami)/.pyenv"
  curl https://pyenv.run | bash # Install pyenv
  pyenv install # Use pyenv to install the Python version found in .python-version
  pyenv virtualenv "$(cat .python-version)" $PROJECT_VIRTUALENV_NAME # Create the virutalenv for the project using pyenv
  pyenv activate $PROJECT_VIRTUALENV_NAME

  ### SETUP POERTY PACKAGE MANAGER & INSTALL PACKAGES

  pip install poetry # Install poetry python package manager
  poetry config virtualenvs.create false # Prevent poetry from creating a virtualenv as I want to use pyenv for that.
  poetry install --no-root # Install the project dependencies

  ### SETUP DJANGO

  python manage.py makemigrations
  python manage.py migrate
}

function create_django_superuser() {
  python manage.py createsuperuser
}

function run_django_server() {
  python manage.py runserver
}

echo ""
echo "setup_environment - Run this command to setup everything needed to run the Django backend"
echo "create_django_superuser - Run this command to create a Django superuser"
echo "run_django_server - Run this command to run the Django server"
echo ""