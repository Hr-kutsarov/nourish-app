import { create } from 'zustand'

interface AuthModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    test: string;
}

const useAuthModal = create<AuthModalProps>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
    test: 'test'
}))

export default useAuthModal;