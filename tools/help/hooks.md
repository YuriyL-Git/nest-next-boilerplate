## Git kraken husky hooks fix

sudo nano ~/.huskyrc

### and paste content:

#!/usr/bin/env bash

source ~/.bash_profile

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

if test -f ".nvmrc"; then
nvm use
fi
