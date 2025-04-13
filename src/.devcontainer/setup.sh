#!/bin/bash

# Install Git LFS
sudo apt-get update
sudo apt-get install -y curl git
curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash
sudo apt-get install -y git-lfs
git lfs install

# Install JavaScript depenedencies
cd /workspaces/IC-src/frontend
npm install
