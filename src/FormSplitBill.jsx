import React, { useState } from 'react';
import Button from './Button';

function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const paidByFriend = bill ? bill - paidByUser : 0;
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  return (
    <form className='form-split-bill'>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>🤑 Bill value</label>
      <input
        type='number'
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🙅 Your expense</label>
      <input
        type='number'
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>🤼 {selectedFriend.name}'s expense</label>
      <input type='text' disabled value={paidByFriend} />

      <label>💵 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
