export const calculateRemainingTime = (expirationTime: any) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainigDuration = adjExpirationTime - currentTime;
    return remainigDuration;
};

export const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if (remainingTime <= 60000) {
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('token');
        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime,
    };
};
