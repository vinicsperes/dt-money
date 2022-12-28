import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/22</td>
          </tr>
          <tr>
            <td width="50%">Pizza para você</td>
            <td>
              <PriceHighlight variant="outcome">- R$ 32,00</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/22</td>
          </tr>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
