# Use the official PHP Apache image
FROM php:8.2-apache

# Copy all project files into the Apache server root
COPY . /var/www/html/

# Expose default port 80
EXPOSE 80
