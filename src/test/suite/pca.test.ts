import { strict as assert } from 'assert'
import { VisualizationProvider } from '../../../src/providers/visualizationProvider'
import * as vscode from 'vscode'

describe('PCA & Clustering', () => {
  it('generates PCA HTML without error', () => {
    const vp = new VisualizationProvider(vscode.Uri.file(process.cwd()))
    const html = (vp as unknown as { getPcaClusteringHtml: (labels: string[], pc1: number[], pc2: number[], clusterIds: number[], k: number) => string }).getPcaClusteringHtml(
      ['s1', 's2'],
      [1.234, -0.456],
      [0.789, -1.234],
      [0, 1],
      2,
    )

    assert.ok(typeof html === 'string')
    assert.ok(html.includes('<!DOCTYPE html>'))
    assert.ok(html.includes('PCA & K-Means Clustering'))
  })
})
