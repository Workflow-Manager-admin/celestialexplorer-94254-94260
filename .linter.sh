#!/bin/bash
cd /home/kavia/workspace/code-generation/celestialexplorer-94254-94260/celestial_explorer
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

