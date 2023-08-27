import { FC } from 'react';


export const LoginPage: FC<{}> = () => {

  return (
    <>
      <h1>Sign In</h1>

      <div>
        <form>

          <div>
            <label>Username</label>
            <input type="text" placeholder='Username' />
          </div>

          <div>
            <label>Password</label>
            <input type="password" placeholder='Password' />
          </div>

        </form>
      </div>
    </>
  )
};
