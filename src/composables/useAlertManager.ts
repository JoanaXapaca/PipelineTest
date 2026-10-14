import { ref, computed } from 'vue'

export type AlertType = 'critical' | 'warning' | 'info'

export interface Alert {
  id: number
  type: AlertType
  room: string
  message: string
  resolved: boolean
}

/**
 * Priority order for alert types (higher number = higher priority).
 */
export const ALERT_PRIORITY: Record<AlertType, number> = {
  critical: 3,
  warning: 2,
  info: 1,
}

/**
 * Composable for managing nurse call alerts.
 *
 * Provides functions to add, resolve, and query alerts based on
 * their priority level (critical, warning, info).
 */
export function useAlertManager() {
  const alerts = ref<Alert[]>([])
  let nextId = 1

  /**
   * Returns only the unresolved alerts.
   */
  const activeAlerts = computed(() => alerts.value.filter((a) => !a.resolved))

  /**
   * Counts active alerts by type.
   */
  const criticalCount = computed(
    () => activeAlerts.value.filter((a) => a.type === 'critical').length
  )
  const warningCount = computed(
    () => activeAlerts.value.filter((a) => a.type === 'warning').length
  )
  const infoCount = computed(
    () => activeAlerts.value.filter((a) => a.type === 'info').length
  )

  /**
   * Returns the active alert with the highest priority.
   * Returns null if there are no active alerts.
   */
  const highestPriorityAlert = computed<Alert | null>(() => {
    if (activeAlerts.value.length === 0) return null
    return activeAlerts.value.reduce((highest, current) =>
      ALERT_PRIORITY[current.type] > ALERT_PRIORITY[highest.type] ? current : highest
    )
  })

  /**
   * Adds a new alert to the manager.
   * Returns the created alert with its assigned ID.
   */
  function addAlert(type: AlertType, room: string, message: string): Alert {
    const alert: Alert = {
      id: nextId++,
      type,
      room,
      message,
      resolved: false,
    }
    alerts.value.push(alert)
    return alert
  }

  /**
   * Marks an alert as resolved by its ID.
   * Returns true if the alert was found and resolved, false otherwise.
   */
  function resolveAlert(id: number): boolean {
    const alert = alerts.value.find((a) => a.id === id)
    if (!alert) return false
    alert.resolved = true
    return true
  }

  /**
   * Removes all alerts (used for testing or reset).
   */
  function clearAlerts(): void {
    alerts.value = []
    nextId = 1
  }

  return {
    alerts,
    activeAlerts,
    criticalCount,
    warningCount,
    infoCount,
    highestPriorityAlert,
    addAlert,
    resolveAlert,
    clearAlerts,
  }
}