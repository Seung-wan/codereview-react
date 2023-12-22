import { BaseModal } from '@components/common';

interface Props {
  onClickConfirm: () => void;
}

export default function ReservationCompleteModal({ onClickConfirm }: Props) {
  return (
    <BaseModal>
      <BaseModal.Title>
        <div>예매가 완료되었습니다</div>
      </BaseModal.Title>
      <BaseModal.Confirm onClickConfirm={onClickConfirm}>확인</BaseModal.Confirm>
    </BaseModal>
  );
}
