import React from 'react';
import styled from '@emotion/styled';

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
const PROFILE_IMAGE_LINK =
  'https://user-images.githubusercontent.com/75475398/196970391-b929d29d-e02c-4836-9ce7-a56da22a10fa.png';

const ProfileImageWrapper = styled.img`
  margin-bottom: 30px;
`;

const ProfileImage: React.FC = () => {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />;
};

export default ProfileImage;
