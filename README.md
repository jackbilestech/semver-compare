# semver-compare

This action takes two string semver values and compares them using a provided comparator.

This is useful when you want to check branch versions and make sure one is going to be ahead of the other, or visa-versa.

This a dockerized GitHub aciton that uses this repo, <https://www.npmjs.com/package/compare-versions> to perform the string comparrison.

*NOTE* If the comparrison fails, the process fires an exit code of 1 potentially stopping the workflow from continuing. If the comparrison passed then the workflow will continue.

## Inputs

## `head`

**Required** The current version to be compared.

## `base`

**Required** The value that `head` is compared to.

## `operator`

The comparator. Default `'>'`.

Allowed values:

- `>`
- `<`
- `=`
- `<=`
- `>=`

## Outputs

No Outputs

## Example usage

```yaml
- uses: jackbilestech/semver-compare@1.0.4
  with:
    head: '2.0.0'
    base: '1.0.0'
    operator: '>'
```
