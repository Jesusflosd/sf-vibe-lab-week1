function AccountCard({ account }) {
  return (
    <div className="account-card">
      <h3>{account.Name}</h3>
      <p><strong>Industry:</strong> {account.Industry}</p>
      <p><strong>Phone:</strong> {account.Phone}</p>
    </div>
  );
}

export default AccountCard;