import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = () => {
	const [registerUser, setRegisterUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
        gender: "",
	});
	const [conflictDialog, setConflictDialog] = useState(false);

	const navigate = useNavigate();

	const handleInputChange = (event) => {
		const newUser = { ...registerUser };
		newUser[event.target.id] = event.target.value;
		setRegisterUser(newUser);
	};

	const existingUserCheck = () => {
		// If your json-server URL is different, please change it below!
		return fetch(`http://localhost:8088/users?email=${registerUser.email}`)
			.then((res) => res.json())
			.then((user) => !!user.length);
	};

	const handleRegister = (e) => {
		e.preventDefault();

		existingUserCheck().then((userExists) => {
			if (!userExists) {
				// If your json-server URL is different, please change it below!
				fetch("http://localhost:8088/users", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: registerUser.email,
						name: `${registerUser.name}`,
						gender: registerUser.gender,
					}),
				})
					.then((res) => res.json())
					.then((createdUser) => {
						if (createdUser.hasOwnProperty("id")) {
							// The user id is saved under the key level_user in session Storage. Change below if needed!
							sessionStorage.setItem("level_user", createdUser.id);
							sessionStorage.setItem("level_user_name", createdUser.name)
							navigate("/");
						}
					});
			} else {
				setConflictDialog(true);
			}
		});
	};

	return (
		<main style={{ textAlign: "center" }}>
			<dialog className="dialog dialog--password" open={conflictDialog}>
				<div>Account with that email address already exists</div>
				<button
					className="button--close"
					onClick={(e) => setConflictDialog(false)}
				>
					Close
				</button>
			</dialog>

			<form className="form--login" onSubmit={handleRegister}>
				<h1 className="h3 mb-3 font-weight-normal">
					Welcome to Level, Please Register Below
				</h1>
				<fieldset>
					<label htmlFor="name"> Name </label>
					<input
						type="text"
						name="name"
						id="name"
						className="form-control"
						placeholder="Name"
						required
						autoFocus
						value={registerUser.name}
						onChange={handleInputChange}
					/>
				</fieldset>
                {/* <fieldset>
					<label htmlFor="gender"> Gender </label>
					<input
						type="gender"
						name="gender"
						id="gender"
						className="form-control"
						placeholder="Gender"
						required
						autoFocus
						value={registerUser.gender}
						onChange={handleInputChange}
					/>
				</fieldset> */}
				<fieldset>
                	<div>
						{/* <label htmlFor="gender">Gender</label> */}
						<select value={registerUser.gender} name="gender" id="gender" onChange={handleInputChange} className="form-control" >
							<option value="0">Select a gender</option>
								<option>male</option>
								<option>female</option>
						</select>
					</div>
				</fieldset>
				<fieldset>
					<label htmlFor="inputEmail"> Email address </label>
					<input
						type="email"
						name="email"
						id="email"
						className="form-control"
						placeholder="Email address"
						required
						value={registerUser.email}
						onChange={handleInputChange}
					/>
				</fieldset>
				<fieldset>
					<button type="submit"> Register </button>
				</fieldset>
			</form>
		</main>
	);
};


