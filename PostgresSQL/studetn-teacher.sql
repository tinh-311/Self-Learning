CREATE TABLE Major (
	id char(10) not null PRIMARY KEY,
	name varchar(50)
);

CREATE TABLE Student (
	id char(10) not null PRIMARY KEY,
	name varchar(50),
	birth date,
	major char(10) REFERENCES Major(id)
);

CREATE TABLE Teacher (
	id char(10) not null PRIMARY KEY,
	name VARCHAR(50),
	birth date,
	major char(10) REFERENCES Major(id)
);

CREATE TABLE Mark (
	id char(10) not null PRIMARY KEY,
	average FLOAT,
	student_id char(10) REFERENCES Student(id)
)

INSERT INTO Major VALUES('01','Information Technology');
INSERT INTO Major VALUES('02','Design');
INSERT INTO Major VALUES('03','Business Administration');


INSERT INTO Student VALUES('01','Nguyễn Văn A','2001/01/02','01');
INSERT INTO Student VALUES('02','Nguyễn Văn B','2001/02/02','02');
INSERT INTO Student VALUES('03','Nguyễn Văn C','2001/03/02','03');
INSERT INTO Student VALUES('04','Nguyễn Văn A1','2001/01/02','01');
INSERT INTO Student VALUES('05','Nguyễn Văn A2','2001/01/02','01');

INSERT INTO Teacher VALUES('01','Nguyễn Văn D','1993/01/02','01');
INSERT INTO Teacher VALUES('02','Nguyễn Văn E','1993/02/03','02');
INSERT INTO Teacher VALUES('03','Nguyễn Văn F','1993/03/04','03');

INSERT INTO Mark VALUES('01', 6, '02');
INSERT INTO Mark VALUES('02', 7.5, '03');
INSERT INTO Mark VALUES('03', 5.5, '01');
INSERT INTO Mark VALUES('04', 9.5, '05');
INSERT INTO Mark VALUES('05', 9, '04');

SELECT*
FROM Major

SELECT*
FROM Student

SELECT*
FROM Teacher

-- Student at Faculty of Information Technology
SELECT* FROM Student
WHERE major='01'

-- JOIN
SELECT *
FROM Student JOIN Mark on Student.id = Mark.student_id

SELECT Student.id, Student.name, Student.birth, Student.major, Mark.average 
FROM Student JOIN Mark on Student.id = Mark.student_id

--MAX mark
SELECT max(average) FROM Mark

UPDATE Student
    SET name = 'Nguyễn Trung Tính'
    WHERE id = '01'


