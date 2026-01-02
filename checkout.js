
export default function Checkout() {
  return (
    <main style={{padding:'40px', fontFamily:'sans-serif'}}>
      <h1>Checkout</h1>
      <p>Manual payment. Instructions emailed.</p>
      <form>
        <input placeholder="Email" /><br/><br/>
        <button type="submit">Place Order</button>
      </form>
    </main>
  )
}
