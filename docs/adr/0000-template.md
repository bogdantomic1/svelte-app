# ADR-0001: {Short, Descriptive Title}

<!--  ctrl + shift + v-->
<!-- Metadata Section -->

| Metadata      | Value                                |
| ------------- | ------------------------------------ |
| **Status**    | {Proposed \| Accepted \| Deprecated} |
| **Date**      | DD-MM-YYYY                           |
| **Deciders**  | {List of decision-makers}            |
| **Consulted** | {List of SMEs/consulted parties}     |
| **Informed**  | {List of informed parties}           |

---

## Context and Problem Statement {################# REQUIRED #################}

_{Describe the current situation and the problem that needs to be solved.  
Example: "We need to choose between X and Y to solve Z problem because..."}_

---

## Decision Drivers

Key factors influencing this decision:

- {Driver 1} (e.g., performance requirements)
- {Driver 2} (e.g., maintainability)
- {Driver 3} (e.g., cost implications)

---

## Considered Options {################# REQUIRED #################}

1. **{Option 1 Title}**  
   _{Brief description}_
2. **{Option 2 Title}**  
   _{Brief description}_

---

## Decision Outcome {################# REQUIRED #################}

**Chosen Option:** {Option X}

**Justification:**  
{Explain why this option was selected, referencing decision drivers.  
Example: "Option 2 was chosen because it best addresses Driver 1 and Driver 2 while being cost-effective."}

---

### Consequences {################# REQUIRED #################}

| Aspect       | Impact                     |
| ------------ | -------------------------- |
| **Positive** | {Benefit 1}, {Benefit 2}   |
| **Negative** | {Drawback 1}, {Drawback 2} |
| **Neutral**  | {Neutral aspect}           |

---

## Validation

_{Describe how this decision will be verified:}_

- [ ] Code review
- [ ] Performance testing
- [ ] {Other validation method}

---

## Options Analysis

### Option 1: {Title}

**Pros:**

- {Pro argument 1}
- {Pro argument 2}

**Cons:**

- {Con argument 1}
- {Con argument 2}

## Example Code Snippet

```tsx
// Sample React component used during evaluation

import React from "react";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Header;
```
