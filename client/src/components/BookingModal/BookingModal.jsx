import React from "react";
import { MantineProvider, Modal } from "@mantine/core";

const BookingModal = ({ opened, setOpened, email, propertyId }) => {
  return (
    <MantineProvider>
      <Modal
        opened={opened}
        setOpened={setOpened}
        title="Select your date of visit"
        centered
      >
        <div>
          <span>This is a booking modal</span>
        </div>
      </Modal>
    </MantineProvider>
  );
};

export default BookingModal;
