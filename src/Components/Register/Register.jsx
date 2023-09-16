import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TableUser from './TableUser';
import { getLocalStore, saveLocalStore } from '../../utils/utils';
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [arrUser, setArrUser] = useState([]);
  const {
    handleBlur,
    handleChange,
    errors,
    values,
    setFieldValue,
    handleSubmit,
    handleReset,
    touched,
    setValues,
  } = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      gender: 'dt1',
    },
    onSubmit: (data, { resetForm }) => {
      console.log('data', data);
      // call api
      const newArrUser = arrUser;
      newArrUser.push(data);
      setArrUser(newArrUser);
      saveLocalStore('arrUser', newArrUser);
      // alert(JSON.stringify(data));
      handleReset();
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().required('Vui lòng nhập thông tin!'),
      phone: Yup.string()
        .required('Vui lòng nhập thông tin!')
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
          'Số điện thoại không đúng định dạng!'
        ),
      email: Yup.string()
        .required('Vui lòng nhập thông tin!')
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          'Email không đúng định dạng!'
        ),
      password: Yup.string()
        .required('Vui lòng nhập thông tin!')
        .matches(
          /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~])(?=.*[A-Z]).{6,8}$/,
          'Mật khẩu bao gồm 6 - 8 ký tự và bắt buộc có 1 ký tự viết hoa và 1 ký tự đặc biệt!'
        ),
      // .min(6, "Mật khẩu bao gồm 6 - 10 ký tự!")
      // .max(10, "Mật khẩu bao gồm 6 - 10 ký tự!"),
      confirmPassword: Yup.string()
        .required('Vui lòng nhập thông tin!')
        .oneOf([Yup.ref('password'), null], 'Mật khẩu chưa trùng khớp!'),
    }),
  });

  // gọi dữ liệu từ localStore lên
  useEffect(() => {
    const data = getLocalStore('arrUser');
    if (data) {
      setArrUser(data);
    }
  }, []);

  const handleDeleteUser = (email) => {
    // clone state đang có ra một array mới
    const newArr = [...arrUser];
    const index = newArr.findIndex((item) => item.email == email);
    if (index != -1) {
      newArr.splice(index, 1);
      setArrUser(newArr);
      // luu local
      saveLocalStore('arrUser', newArr);
    }
  };

  const handleGetValueUser = (email) => {
    const user = arrUser.find((item) => item.email == email);
    if (user) {
      // đổ dữ liệu lên form
      // {
      //   fullName: '',
      //   email: '',
      //   phone: '',
      //   password: '',
      //   confirmPassword: '',
      //   gender: 'dt1',
      // }
      setValues(user);
    }
  };

  const handleUpdateUser = () => {
    console.log(values);
    // tìm tới vị trí object cũ
    const newArrUser = [...arrUser];
    const index = newArrUser.findIndex((item) => item.email == values.email);
    if (index != -1) {
      newArrUser[index] = values;
      setArrUser(newArrUser);
      // saveLocal
      saveLocalStore('arrUser', newArrUser);
      handleReset();
    }
  };
  // console.log(errors);

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">
            Validation Form
          </h2>
          <p className="text-gray-500 mb-6">
            Form validation with formik and yup
          </p>
        </div>

        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600">
              <p className="font-medium text-lg">Personal Details</p>
              <p>Please fill out all the fields.</p>
            </div>
            <div className="col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 gap-y-4 text-sm grid-cols-1">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullName}
                    />
                    {touched.fullName && errors.fullName && (
                      <span className="text-red-500">{errors.fullName}</span>
                    )}
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Email</label>
                    <input
                      type="text"
                      name="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {touched.email && errors.email && (
                      <span className="text-red-500">{errors.email}</span>
                    )}
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                    {touched.phone && errors.phone && (
                      <span className="text-red-500">{errors.phone}</span>
                    )}
                  </div>
                  <div className="md:col-span-5 relative">
                    <label htmlFor="password">Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 relative z-0 pr-4"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <div
                      className="absolute top-9 right-4 cursor-pointer z-10"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? (
                        <i className="fa-solid fa-eye"></i>
                      ) : (
                        <i className="fa-solid fa-eye-slash"></i>
                      )}
                    </div>
                    {touched.password && errors.password && (
                      <span className="text-red-500">{errors.password}</span>
                    )}
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                      <span className="text-red-500">
                        {errors.confirmPassword}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 col-span-3">
                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        id="man"
                        name="gender"
                        checked={values.gender === 'dt1'}
                        onChange={() => setFieldValue('gender', 'dt1')}
                      />
                      <label htmlFor="man" className="cursor-pointer">
                        {' '}
                        Nam
                      </label>
                    </div>

                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        id="woman"
                        name="gender"
                        checked={values.gender === 'dt2'}
                        onChange={() => setFieldValue('gender', 'dt2')}
                      />
                      <label htmlFor="woman" className="cursor-pointer">
                        {' '}
                        Nữ
                      </label>
                    </div>
                  </div>

                  <div className="md:col-span-5 text-end">
                    <button
                      onClick={handleReset}
                      className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mr-4 transition-all duration-300"
                    >
                      Reset Form
                    </button>
                    <button
                      onClick={() => {
                        // xử lí nếu như form còn lỗi sẽ không chạy hàm handleUpdateUser
                        // dùng for in để kiểm tra xem form còn lỗi hay không
                        for (let key in errors) {
                          if (errors[key]) {
                            return;
                          }
                        }
                        handleUpdateUser();
                      }}
                      type="button"
                      className="border border-black text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded mr-4 transition-all duration-300"
                    >
                      Update
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <TableUser
          arrUser={arrUser}
          handleDeleteUser={handleDeleteUser}
          handleGetValueUser={handleGetValueUser}
        />
      </div>
    </div>
  );
};

export default Register;
