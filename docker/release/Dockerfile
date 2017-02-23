FROM ctdao/shopme-base:latest
MAINTAINER Truc C. Dao <truc.c.dao@gmail.com>

# Copy application artifacts
COPY target /app

# Install application
RUN npm install /app/*.tgz --production
