import { Dialog } from "quasar"

export function useShowErrorMessage(message) {
  Dialog.create({
    title: 'Error',
    message,
    color: 'negative',
    persistent: true
  })
}