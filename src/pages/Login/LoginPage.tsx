import Button from '../../components/Button';

export default function LoginPage() {
  return (
    <div className="login">
      <h2>Log In</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Button text="Log In" />
      </form>
    </div>
  );
}
