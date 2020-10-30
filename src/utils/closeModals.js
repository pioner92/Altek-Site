export const closeModalAndClearSelectedId = (e, setVisible, selectedId, clearSelectedDrivers) => {
    if (e.target.className === 'mymodal-bg-blur' || e.target.className === 'yes-btn' || e.target.className === 'no-btn') {
        setVisible(false);
        if (selectedId.length > 0) {
            clearSelectedDrivers();
        }
    }
};

export const closeModal = (e, setVisible) => {
    if (e.target.className === 'mymodal-bg-blur' || e.target.className === 'yes-btn' || e.target.className === 'no-btn') {
        setVisible(false);
        return true;
    }
    return false;
};
