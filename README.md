# misfitstestr

Run the following command

#npm install
#npm start

Create an user account from Signup or use the followwing access
#Username: surja
#Password: 1234

#Process Flow:
First Register User
Than Login User
User can than press the button to start transmission of data from five smaple device.
Each device will send data on a 5 sec interval.
Data is generated from JS script(emulating accelerometer device) and sent using Socket to Django Backend Server.
The Server saves the data and than sends the data to dashboard for live reporting. The graph is updated live through socket connect from database to client browser.
The program uses REST API for Login and Authentiction and user Sockets for live data transmission