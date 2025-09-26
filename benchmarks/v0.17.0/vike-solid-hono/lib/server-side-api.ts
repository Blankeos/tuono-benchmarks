export const mockServerSideAPI = async (): Promise<{ data: number }> => {
  return {
    data: Math.floor(Math.random() * 10),
  };
};
