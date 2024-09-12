# Dockerfile

# Use an official lightweight image
FROM ubuntu:20.04

# Install any needed packages
RUN apt-get update && apt-get install -y \
    curl \
    jq

# Copy the entrypoint script to the image
COPY entrypoint.sh /entrypoint.sh

# Give execute permissions
RUN chmod +x /entrypoint.sh

# Set the entrypoint
ENTRYPOINT ["/entrypoint.sh"]
