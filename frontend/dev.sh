if command -v nvm > /dev/null 2>&1; then
  nvm install
fi

function setup_environment() {
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash # Installs nvm
  nvm install # install the node version of the project
  npm i
}

function run_vite_server() {
  npm run dev
}

echo ""
echo "setup_environment - Run this command to setup everything needed to run the React frontend"
echo "run_vite_server - Run this command to run the Vite server"
echo ""