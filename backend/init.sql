create database chat;
CREATE TABLE USERS (
    FirstNAME varchar(250),
    Phone_No varchar(250),
    Email varchar(250),
    Password varchar(250)
);
CREATE TABLE Messages (
    Sender varchar(245),
    Reciever varchar(234),
    Message varchar(234),
    Time varchar(456)
);

-- // Black_Listed_Users
-- // blockBy , blockedOne

-- 1 --> 2,3,4,5
CREATE TABLE Black_Listed_Users(
     Block_By varchar(456),
     Blocked_One varchar(465)
    );