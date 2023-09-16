import React from 'react';

const TableUser = ({ arrUser, handleDeleteUser, handleGetValueUser }) => {
  console.log(arrUser);
  return (
    <div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                STT
              </th>
              <th scope="col" class="px-6 py-3">
                Full name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Phone
              </th>
              <th scope="col" class="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {arrUser.map((item, index) => {
              return (
                <tr class="bg-white dark:bg-gray-800 text-white" key={index}>
                  <td class="px-6 py-4">{index + 1}</td>
                  <td class="px-6 py-4">{item.fullName}</td>
                  <td class="px-6 py-4">{item.email}</td>
                  <td class="px-6 py-4">{item.phone}</td>
                  <td class="px-6 py-4">{item.password}</td>
                  <td class="px-6 py-4">
                    {item.gender == 'dt1' ? 'Nam' : 'Nữ'}
                  </td>
                  <td class="px-6 py-4 space-x-3">
                    <button
                      onClick={() => {
                        handleDeleteUser(item.email);
                      }}
                      className="bg-red-500 rounded-md text-white px-6 py-2 hover:bg-red-700 duration-300"
                    >
                      Xoá
                    </button>
                    <button
                      className="bg-yellow-500 rounded-md text-white px-6 py-2 hover:bg-yellow-700 duration-300"
                      onClick={() => {
                        handleGetValueUser(item.email);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableUser;
