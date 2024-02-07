import React, { useState } from "react";
import { Button, Modal } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
const BookingModal = ({ opened, setOpened, email, propertyId }) => {
  const [value, setValue] = useState(null);

  return (
    <Modal
      opened={opened}
      onClose={() => {
        setOpened(false);
      }}
      title="Select your date of visit"
      centered
    >
      <div className="flexColCenter">
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />
        <Button>Book your visit</Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
