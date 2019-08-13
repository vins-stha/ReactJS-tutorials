import React from "react"
function MyForm(){
	return(
		<div id="container">
			<label for="uname"><b>Username</b></label>
			<input type="text" placeholder="Enter Username" name="uname"></input>

			<label for="psw"><b>Password</b></label>
			<input type="password" placeholder="Enter Password" name="psw"></input>

			<button type="submit">Login</button>
			<label for="remember"><b>Remeber</b></label>
			

		</div>
	)
	
}
export default MyForm