"use client" // optional if using app directory

import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import * as React from "react"

export default function TestMenu() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

	const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<div style={{ padding: "2rem" }}>
			<Button variant="contained" onClick={handleOpen}>
        Open Menu
			</Button>

			<Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My Account</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</div>
	)
}
