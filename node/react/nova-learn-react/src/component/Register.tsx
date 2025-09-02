import React, { useState } from "react";
import type { RegisterDto } from "../dto/RegisterDto";
import { registerApiCall } from "../service/AuthService";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [qualifications, setQualifications] = useState<string[]>([]);
  const [education, setEducation] = useState<string>("");
  const navigator = useNavigate();

  const qualificationHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQualifications(event.target.value.split(","));
  };
  const [isTeacher, setIsTeacher] = useState<boolean>(true);

  const registerHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const register: RegisterDto = {
      firstName,
      lastName,
      email,
      username,
      password,
      qualifications,
      education,
    };
    const type = isTeacher ? "teacher" : "student";
    registerApiCall(register, type)
      .then((res) => {
        console.log(res.data);
        navigator("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <form className="card-body" onSubmit={registerHandler}>
          <h2 className="card-title text-center text-primary">Register</h2>
          <label className="form-control w-full mb-2">
            <span className="label-text">First Name</span>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter First Name"
            />
          </label>
          <label className="form-control w-full mb-2">
            <span className="label-text">Last Name</span>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter Last Name"
            />
          </label>
          <label className="form-control w-full mb-2">
            <span className="label-text">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter Email"
            />
          </label>
          <label className="form-control w-full mb-2">
            <span className="label-text">Username</span>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter Username"
            />
          </label>
          <label className="form-control w-full mb-2">
            <span className="label-text">Password</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="input input-bordered w-full"
              placeholder="Enter Password"
            />
          </label>
          {isTeacher && (
            <label className="form-control w-full mb-2">
              <span className="label-text">Qualifications</span>
              <input
                value={qualifications.join(",")}
                onChange={qualificationHandler}
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter Qualifications with comma."
              />
            </label>
          )}
          {!isTeacher && (
            <div className="mb-2">
              <span className="block font-semibold mb-2 text-primary">
                Education
              </span>
              <div className="flex flex-wrap gap-4">
                {[
                  "UNDER_GRADUATE",
                  "POST_GRADUATE",
                  "HIGH_SCHOOL",
                  "HOME_SCHOOLING",
                  "COLLEGE",
                ].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      value={option}
                      name="education"
                      onChange={() => setEducation(option)}
                      type="radio"
                      checked={education === option}
                      className="radio radio-primary"
                    />
                    <span className="label-text">
                      {option.replace("_", " ")}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}
          <div className="form-control flex flex-row items-center gap-2 mb-4">
            <input
              type="checkbox"
              name="teacher"
              id="isTeacher"
              checked={isTeacher}
              onChange={(e) => setIsTeacher(e.target.checked)}
              className="checkbox checkbox-primary"
            />
            <label className="label-text font-semibold text-primary">
              {isTeacher ? "Teacher" : "Student"}
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-full mt-4">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
