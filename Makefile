include configs/env

# Make sure ./configs/nginx is updated
server:
	sudo cp ./configs/nginx /etc/nginx/sites-available/default
	sudo service nginx restart
	PORT=$(PORT) node app.js &

kill:
	kill -9 ${shell lsof -ti :$(PORT)}


