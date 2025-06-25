import { Avatar, Box, Typography } from "@mui/material";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

export const UserInBar = () => {
    const [userData, setUserData] = useState<{ name: string; avatar: string }>({
        name: "User",
        avatar: ""
    });

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            setUserData({
                name: user.displayName?.replace(/"/g, "") || "",
                avatar: user.photoURL || ""
            });
        }
    }, []);

    return (
        <Box sx={{ display: "flex", alignItems: "center", ml: 2 , marginLeft: "auto" , paddingRight: "2rem"}}>
            {userData.avatar && (
                <Avatar
                    src={userData.avatar}
                    alt={userData.name}
                    sx={{ width: 32, height: 32, mr: 1 }}
                />
            )}
            <Typography variant="body1">{userData.name}</Typography>
        </Box>
    );
};