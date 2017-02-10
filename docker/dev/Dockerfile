FROM ctdao/shopme-base:latest
MAINTAINER Truc C. Dao <truc.c.dao@gmail.com>

# OUTPUT: Build cache
VOLUME /build

# OUTPUT: Test reports are output here
VOLUME /reports

# Add test entrypoint script
COPY scripts/test.sh /usr/local/bin/test.sh
RUN chmod +x /usr/local/bin/test.sh

# Set defaults for entrypoint and command string
ENTRYPOINT ["test.sh"]
CMD ["npm", "test"]

# Bundle app source
COPY . /app
WORKDIR /app
