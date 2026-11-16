export default function TicketForm() {
  return (
    <div>
      <h1>Solicitação de Ticket</h1>

      <form action="">
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="name" placeholder="Coloque o seu nome" required />
      </form>
    </div>
  );
}
