import { describe, it, expect, beforeEach } from 'vitest'
import { useAlertManager } from '../composables/useAlertManager'

describe('useAlertManager', () => {
  let manager: ReturnType<typeof useAlertManager>

  beforeEach(() => {
    manager = useAlertManager()
  })

  describe('addAlert', () => {
    it('adds an alert with auto-generated ID', () => {
      const alert = manager.addAlert('critical', 'Room 101', 'Patient needs help')
      expect(alert.id).toBe(1)
      expect(alert.type).toBe('critical')
      expect(alert.room).toBe('Room 101')
      expect(alert.resolved).toBe(false)
    })

    it('assigns sequential IDs to multiple alerts', () => {
      manager.addAlert('critical', 'Room 101', 'First')
      manager.addAlert('warning', 'Room 102', 'Second')
      manager.addAlert('info', 'Room 103', 'Third')

      expect(manager.alerts.value.length).toBe(3)
      expect(manager.alerts.value.find((a) => a.room === 'Room 101')?.id).toBe(1)
      expect(manager.alerts.value.find((a) => a.room === 'Room 102')?.id).toBe(2)
      expect(manager.alerts.value.find((a) => a.room === 'Room 103')?.id).toBe(3)
    })
  })

  describe('active alerts', () => {
    it('counts active alerts correctly', () => {
      manager.addAlert('critical', 'Room 101', 'Alert 1')
      manager.addAlert('warning', 'Room 102', 'Alert 2')
      expect(manager.activeAlerts.value.length).toBe(2)
    })

    it('excludes resolved alerts from active count', () => {
      const alert = manager.addAlert('critical', 'Room 101', 'Alert 1')
      manager.resolveAlert(alert.id)
      expect(manager.activeAlerts.value.length).toBe(0)
    })
  })

  describe('priority counting', () => {
    it('counts critical alerts correctly', () => {
      manager.addAlert('critical', 'Room 101', 'Critical 1')
      manager.addAlert('critical', 'Room 102', 'Critical 2')
      manager.addAlert('warning', 'Room 103', 'Warning 1')
      expect(manager.criticalCount.value).toBe(2)
      expect(manager.warningCount.value).toBe(1)
      expect(manager.infoCount.value).toBe(0)
    })

    it('counts alerts of each type independently', () => {
      manager.addAlert('info', 'Room 101', 'Info 1')
      manager.addAlert('info', 'Room 102', 'Info 2')
      manager.addAlert('info', 'Room 103', 'Info 3')
      manager.addAlert('warning', 'Room 104', 'Warning 1')
      expect(manager.infoCount.value).toBe(3)
      expect(manager.warningCount.value).toBe(1)
      expect(manager.criticalCount.value).toBe(0)
    })

    it('does not count resolved alerts', () => {
      const a = manager.addAlert('critical', 'Room 101', 'C1')
      manager.addAlert('critical', 'Room 102', 'C2')
      manager.resolveAlert(a.id)
      expect(manager.criticalCount.value).toBe(1)
    })
  })

  describe('highestPriorityAlert', () => {
    it('returns null when no alerts exist', () => {
      expect(manager.highestPriorityAlert.value).toBeNull()
    })

    it('returns the only alert when there is one', () => {
      const alert = manager.addAlert('info', 'Room 101', 'Only one')
      expect(manager.highestPriorityAlert.value?.id).toBe(alert.id)
    })

    it('returns critical alert when it exists', () => {
      manager.addAlert('info', 'Room 101', 'Info')
      manager.addAlert('warning', 'Room 102', 'Warning')
      const critical = manager.addAlert('critical', 'Room 103', 'Critical')
      expect(manager.highestPriorityAlert.value?.id).toBe(critical.id)
    })

    it('returns warning when no critical exists', () => {
      manager.addAlert('info', 'Room 101', 'Info')
      const warning = manager.addAlert('warning', 'Room 102', 'Warning')
      expect(manager.highestPriorityAlert.value?.id).toBe(warning.id)
    })

    it('ignores resolved alerts when determining priority', () => {
      const critical = manager.addAlert('critical', 'Room 101', 'Critical')
      const warning = manager.addAlert('warning', 'Room 102', 'Warning')
      manager.resolveAlert(critical.id)
      expect(manager.highestPriorityAlert.value?.id).toBe(warning.id)
    })
  })

  describe('resolveAlert', () => {
    it('resolves an existing alert', () => {
      const alert = manager.addAlert('critical', 'Room 101', 'Test')
      const result = manager.resolveAlert(alert.id)
      expect(result).toBe(true)
      expect(manager.alerts.value.find((a) => a.id === alert.id)?.resolved).toBe(true)
    })

    it('returns false when alert does not exist', () => {
      const result = manager.resolveAlert(999)
      expect(result).toBe(false)
    })
  })

  describe('clearAlerts', () => {
    it('removes all alerts and resets the ID counter', () => {
      manager.addAlert('critical', 'Room 101', 'A')
      manager.addAlert('warning', 'Room 102', 'B')
      manager.clearAlerts()
      expect(manager.alerts.value.length).toBe(0)

      const newAlert = manager.addAlert('info', 'Room 103', 'C')
      expect(newAlert.id).toBe(1)
    })
  })
})