import { Avatar, Box, Typography } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export const UserInBar = () => {
    const [userData, setUserData] = useState<{ name: string; avatar: string }>({
        name: "",
        avatar: ""
    });

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserData({
                    name: user.displayName?.replace(/"/g, "") || user.email || "User",
                    avatar: user.photoURL || ""
                });
            } else {
                setUserData({
                    name: "",
                    avatar: ""
                });
            }
        });

        return () => unsubscribe();
    }, []);

    if (!userData.name && !userData.avatar) return null;

    return (
        <Box sx={{ display: "flex", alignItems: "center", ml: 2, marginLeft: "auto", paddingRight: "2rem" }}>
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
