#!/bin/bash

# Fail on errors
set -e

# Get the input parameter from the workflow
INPUT_NAME=${INPUT_NAME:-"World"}

# Print a message using the input parameter
echo "Hello, $INPUT_NAME!"
