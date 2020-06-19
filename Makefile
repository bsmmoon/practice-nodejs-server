run:
	sudo cp ./configs/nginx /etc/nginx/sites-available/default
	sudo service nginx restart
	node app.js

