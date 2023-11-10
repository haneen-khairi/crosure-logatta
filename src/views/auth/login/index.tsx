import { RepeatIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";

import * as UserAPI from "../../../api/user/";
import FormRenderer from "../../../components/forms/FormRenderer";
import AuthLayout from "../../../layouts/auth";
import { login } from "../../../redux/actions/auth";

const LoginPage = () => {
  const dispatch = useDispatch();

  const inputs = [
    {
      placeholder: "Email",
      name: "email",
      type: "email",
      required: true,
      fullWidth: true,
      double: false,
      triple: false,
    },
    {
      placeholder: "Password",
      name: "password",
      type: "password",
      required: true,
      fullWidth: true,
      double: false,
      triple: false,
    },
    {
      title: "Remember Me",
      name: "remember",
      type: "checkbox",
      required: false,
      fullWidth: false,
      double: true,
      triple: false,
    },
  ];

  const onSubmit = (data: object) => {
    UserAPI.loginAPI(data).then((res: any) => {
      dispatch(
        login({
          token: res.access,
          refreshToken: res.refresh,
          user: { name: "Name" },
        })
      );
    });
  };

  return (
    <AuthLayout
      icon={<RepeatIcon me={2} color="primary.500" />}
      title="Welcome back,"
      subtitle="Please enter your credentials to login to your account."
    >
      <FormRenderer inputs={inputs} onSubmit={onSubmit} submitText="Log in" />
    </AuthLayout>
  );
};

export default LoginPage;
