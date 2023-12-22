import { BaseModal } from '@components/common';

interface Props {
  onClickConfirm: () => void;
  onClickCancel: () => void;
}

export default function ReservationModal({ onClickConfirm, onClickCancel }: Props) {
  return (
    <BaseModal>
      <BaseModal.Title>
        <div>티켓을 예매하시겠습니까?</div>
        <div>예매 내역은 이메일로 전송됩니다</div>
      </BaseModal.Title>
      <BaseModal.Confirm onClickConfirm={onClickConfirm}>확인</BaseModal.Confirm>
      <BaseModal.Cancel onClickCancel={onClickCancel}>취소</BaseModal.Cancel>
    </BaseModal>
  );
}
