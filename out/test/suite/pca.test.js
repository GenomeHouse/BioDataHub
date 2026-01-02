"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const visualizationProvider_1 = require("../../../src/providers/visualizationProvider");
const vscode = require("vscode");
describe('PCA & Clustering', () => {
    it('generates PCA HTML without error', () => {
        const vp = new visualizationProvider_1.VisualizationProvider(vscode.Uri.file(process.cwd()));
        const html = vp.getPcaClusteringHtml(['s1', 's2'], [1.234, -0.456], [0.789, -1.234], [0, 1], 2);
        assert_1.strict.ok(typeof html === 'string');
        assert_1.strict.ok(html.includes('<!DOCTYPE html>'));
        assert_1.strict.ok(html.includes('PCA & K-Means Clustering'));
    });
});
//# sourceMappingURL=pca.test.js.map